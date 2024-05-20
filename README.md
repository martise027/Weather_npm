# weather_npm
<p style="display:inline">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents

- [Project description](#Projectdescription)
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)


## Project decription
This is npm cli that returns weather informatin based on users location.<br>
I bet u have experienced you want to check weather but you can not check or cant use phone. 🫢

This is allow you to check it but you still look like working.

## Features
You run specific command and this package fetch the location and returns weather.

## Usage
This command activate weather package.

```bash
weather lmk
```

## Configuration

### 1. Download this folder and open it on VScode
After opened file with vscode open weather.js file
![Alt text](/page.png)


### 2. Go to [weather API](https://www.weatherapi.com/docs/)

Login/register and get API key and API URL 


### 3. Add API key and API URL to the code
Replace API key and URL with comment

![Alt text](/api.png)




### 4. Install on your computer

Change your directory to inside package
```bash
cd package
```

Generate .tgz file
```bash
npm pack
```

install weather npm on the computer
```bash
npm install -g /path/to/your/cli/project/dist/your-cli-tool-1.0.0.tgz
```
You can drag and drop .tgz file on terminal. This gives correct path automatically.






