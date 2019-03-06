var dynamicManifest = {
	"name": "SpaceH",
	"description": "Personal blog by Harshit Prajapati",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#ffa7c4",
  "background_color": "#ffffff"
}

const stringManifest = JSON.stringify(dynamicManifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);

document.querySelector('#dynamic-manifest').setAttribute('href', manifestURL);