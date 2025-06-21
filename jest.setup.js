// jest.setup.js
import '@testing-library/jest-dom'      // adds .toBeInTheDocument(), etc.
import 'jest-axe/extend-expect'         // adds accessibility matchers
import { server } from './src/mocks/server';
import { jestPreviewConfigure } from 'jest-preview'

// enable auto‐preview on failure
jestPreviewConfigure({ autoPreview: true })
// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// // Establish API mocking before all tests.
// i18n
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: { translation: en },
//         },
//         lng: 'en',
//         fallbackLng: 'en',
//         interpolation: { escapeValue: false },
//         react: { useSuspense: false },
//     })

beforeAll(() => server.listen())

// Reset any request handlers (for test-specific overrides) so tests are isolated.
afterEach(() => server.resetHandlers())

// Clean up once the tests are done.
afterAll(() => server.close())

// 1. If JSDOM has a HTMLDialogElement, but no .showModal/.close, stub them:
if (typeof HTMLDialogElement !== 'undefined') {
    if (!HTMLDialogElement.prototype.showModal) {
        HTMLDialogElement.prototype.showModal = function () {
            this.setAttribute('open', '')  // so CSS/selectors that rely on [open] still work
        }
    }
    if (!HTMLDialogElement.prototype.close) {
        HTMLDialogElement.prototype.close = function () {
            this.removeAttribute('open')
        }
    }
}
if (typeof window !== 'undefined' && !window.HTMLElement.prototype.scrollIntoView) {
    window.HTMLElement.prototype.scrollIntoView = function () {
        /* no-op so tests don’t error */
    }
}