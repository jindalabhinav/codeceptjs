import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox',
      url: 'http://localhost:5500/static',
      show: true,
      waitForNavigation: "load",
      pressKeyDelay: 100
      // waitForAction: 1000

    },
    FileSystem: {}
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    heal: {
      enabled: true
    }
  },
  name: 'codeceptjs'
}