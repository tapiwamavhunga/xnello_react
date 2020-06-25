

## Installation

1. Clone this repo in `git clone https://github.com/tapiwamavhunga/xnello_react.git`

2. `git checkout branchname`

3. Run `npm install`

## Configure

Add your wordPress siteUrl in `src/client-config.js`

```ruby
const clientConfig = {
	siteUrl: 'http://localhost:8888/wordpress'
};

export default clientConfig;
``` 


- `npm run dev` Runs webpack dev server for development ( in watch mode )

Common
- `prod` Runs webpack in production mode

