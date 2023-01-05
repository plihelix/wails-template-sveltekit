#!/bin/bash

# bash script to create a clean wails.io project with sveltekit.

# echo banner to introduce the script
echo "Wails.io + sveltekit project creator"
echo "=================================="

# Accept the following arguments:
# -n, --new - creates a new project
while getopts n: flag
do
    case "${flag}" in
        n) name=${OPTARG};;
        *) echo "wsvelte: Usage: $0 [-n] [name of project]";;
    esac
done



# Check that the required dependencies are installed
echo "wsvelte: Checking dependencies..."
function checkDepsInstalled() {
    if ! [ -x "$(command -v $1)" ]; then
        echo "wsvelte: Error: $1 is not installed." >&2
        exit 1
    fi
}
checkDepsInstalled "go"
checkDepsInstalled "npm"

# function
function checkGoVersion() {
    # Check that the go version is greater than 1.16
    goVersion=$(go version | awk '{print $3}' | awk -F. '{print $2}')
    if [ $goVersion -lt 18 ]; then
        echo "wsvelte: Error: go version must be greater than 1.18." >&2
        exit 1
    fi
}

checkGoVersion

# If 'npm version' output contains node, get the version number.
# If it doesn't, then node is not installed.
function checkNodeVersion() {
    nodeVersion=$(node -v)
    nodeVersion=${nodeVersion:1}
    nodeVersion=${nodeVersion:0:2}
    #display the nodeVersion result
    if [ "$nodeVersion" -lt 15 ]; then
        echo "wsvelte: Please install node 15+ and run this script again."
        exit
    fi
}
checkNodeVersion

# Check that wails doctor is healthy.
if [ "$(wails doctor | grep "Your system is ready for Wails development!" | wc -l)" -eq 0 ]; then
  echo "wsvelte: Please run wails doctor and fix any issues before running this script."
  exit
else
  echo "wsvelte: wails doctor reports healthy."
fi

# Check that the user has provided a project name
if [ -z "${name}" ]; then
  echo "wsvelte: Please provide a project name."
  echo "wsvelte: Example:"
  echo "wsvelte: bash wails-sveltekit.sh -n myproject"
  exit
fi

# Check that the project name is valid for a folder name
if [[ "${name}" =~ [^a-zA-Z0-9_-] ]]; then
  echo "wsvelte: Please provide a valid project name."
  echo "wsvelte: Project name must only contain letters, numbers, underscores and dashes."
  exit
fi

# Make sure the project name is not already in use
if [ -d "${name}" ]; then
  echo "wsvelte: The project name ${name} is already in use."
  echo "wsvelte: Please provide a different project name."
  exit
fi

# Run the wails init command
echo "wsvelte: ---  --- ---"
echo "wsvelte: First we create a default wails svelte project..."
wails init -n "${name}" -t svelte
cd "${name}"

# Recursively remove the frontend folder and everying in it
echo "wsvelte: ---  --- ---"
echo "wsvelte: Removing the default frontend folder..."
rm -rf frontend

# Create the frontend folder using npm to generate a sveltekit project named frontend.
echo "wsvelte: ---  --- ---"
echo "wsvelte: Now we create a default sveltekit project in the frontend folder..."
npm create skeleton-app@latest frontend --yes

# Install the required dependencies in the frontend folder
echo "wsvelte: ---  --- ---"
echo "wsvelte: Installing npm required dependencies..."
cd "./frontend"

# Install the required dependencies in the frontend folder
echo "wsvelte: ---  --- ---"
echo "wsvelte: Installing npm required dependencies..."
npm i
npm i -D @sveltejs/adapter-static
npm i -D @jridgewell/sourcemap-codec
npm i -D dotenv

## Remove the old svelte.config.js
echo "wsvelte: ---  --- ---"
echo "wsvelte: Removing the old svelte.config.js"
rm svelte.config.js

# Create a new svelte.config.js
echo "wsvelte: ---  --- ---"
echo "wsvelte: Creating a new svelte.config.js"
cat > svelte.config.js << EOF
import adapter from '@sveltejs/adapter-static'

export default {
  kit: {
    adapter: adapter({
		fallback: 'index.html'
    }),
    embedded: true,
	},
};
EOF

# Return to the root of the project to finish up.
echo "wsvelte: ---  --- ---"
echo "wsvelte: Returning to the root of the project..."
cd ..

# Change the line containing "//go:embed all:frontend/dist" to
# "//go:embed all:frontend/build" in main.go
echo "wsvelte: ---  --- ---"
echo "wsvelte: Changing the line containing //go:embed all:frontend/dist to //go:embed all:frontend/build in main.go"
sed -i 's/\/\/go:embed all:frontend\/dist/\/\/go:embed all:frontend\/build/' main.go


echo "wsvelte: ---  --- ---"
echo "wsvelte: Done!"
echo "wsvelte: You can now build the project using the command: wails build"
echo "wsvelte: You can now run the project in dev mode using the command: wails dev"
