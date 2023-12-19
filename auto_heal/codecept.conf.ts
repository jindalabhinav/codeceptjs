import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
/*
  tryTo (enabled globally)
  retryFailedStep (enabled globally)
  retryTo (enabled globally)
  eachElement (enabled globally)
  pauseOnFail (disabled, should be turned on when needed)
  screenshotOnFail (enable globally)
  setCommonPlugins();
*/

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:8080',
      show: true,
      pressKeyDelay: 100
    }
  },
  plugins: {
    heal: {
      enabled: true,
      openaiApiKey: "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",
      ai: {
        enabled: true, // Enable AI suggestions for test writing and healing
      }
    }
  },
  ai: {
    model: 'gpt-3.5-turbo-16k',
    temperature: 0.1,
    html: {
      // Maximum length of the HTML snippet used for AI analysis (helps keep things manageable)
      maxLength: 50000,
      // Simplify the HTML structure by removing unnecessary elements and attributes
      simplify: true,
      // Minimize the HTML code by removing whitespace and other formatting
      minify: true,
      // List of interactive elements that AI should focus on, like buttons and inputs
      interactiveElements: ['a', 'input', 'button', 'select', 'textarea', 'option'],
      // List of text elements that AI can use for understanding context
      textElements: ['label', 'h1', 'h2'],
      // List of allowed attributes on various elements (prevents AI from focusing on irrelevant details)
      allowedAttrs: ['id', 'for', 'class', 'name', 'type', 'value', 'tabindex', 'aria-labelledby', 'aria-label', 'label', 'placeholder', 'title', 'alt', 'src', 'role'],
      // List of allowed roles for elements, further guiding AI attention to relevant ones
      allowedRoles: ['button', 'checkbox', 'search', 'textbox', 'tab'],
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'auto_heal'
}