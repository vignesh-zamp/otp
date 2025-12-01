# **App Name**: MinutePass

## Core Features:

- Hardcoded Login: Login page with hardcoded credentials (airbnb@kyriba.com, demo123).
- Dynamic Code Display: Display a unique numerical code that changes every minute based on the provided CSV in the public folder.
- Data Retrieval: Fetches new code every minute from a file. It serves as tool for future expansion where database might be necessary to display values without storage within source files

## Style Guidelines:

- Primary color: Soft blue (#A0D2EB) to convey trust and security, drawing inspiration from Google Authenticator.
- Background color: Light grey (#F0F0F0), nearly white, creating a clean and focused environment for displaying the code.
- Accent color: Light orange (#FFB347) for call-to-action elements and visual interest.
- Body and headline font: 'Inter', sans-serif. Note: currently only Google Fonts are supported.
- The numerical code will be centrally aligned, using a large, clear font for easy readability. Login fields will have a clean, minimal design.
- A subtle fade transition will occur when the numerical code updates each minute to provide visual feedback.