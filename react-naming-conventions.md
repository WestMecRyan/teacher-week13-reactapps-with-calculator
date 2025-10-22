Here are the React naming conventions:

**Components:**
- **PascalCase** - `CalcButton`, `CalculatorWrapper`, `UserProfile`
- This applies to both function and class components

**Props:**
- **camelCase** - `onClick`, `textValue`, `isVisible`, `userName`
- Event handler props typically start with `on`: `onClick`, `onSubmit`, `onChange`, `onButtonPress`

**Variables and Functions:**
- **camelCase** - `sendToOutput`, `handleButtonClick`, `const userName = "John"`
- Handler functions often start with `handle`: `handleClick`, `handleSubmit`, `handleChange`

**Constants:**
- **SCREAMING_SNAKE_CASE** for true constants - `const MAX_ITEMS = 100`, `const API_URL = "..."`
- **camelCase** for regular variables that don't change - `const buttons = [...]`

**CSS Classes:**
- **kebab-case** in CSS files - `.calc-button`, `.primary-display`
- **camelCase** when used as className in JSX - `className="calcButton"` or `className="primaryDisplay"`
- You're mixing both styles in your code, which is fine, but pick one for consistency!

**Files:**
- **PascalCase** for component files - `CalcButton.jsx`, `CalculatorWrapper.jsx`
- **kebab-case** for other files - `calc-button.css`, `calculator-wrapper.css`
- **camelCase** also acceptable for config files - `viteConfig.js`

