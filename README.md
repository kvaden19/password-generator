# password-generator

## Description
Best practices for web security tell us to use passwords that are "hard to guess" and to use a different password for each page or app we use. For most of us, that can mean dozens or even hundreds of passwords to create and remember. We also need to keep track of different password requirements for different sites, for example, some require us to use special characters while others do not.

This app will generate a random password for the user, given criteria such as which character types to use and length of desired password.

The app is built with HTML, CSS, and vanilla JavaScript.

## Usage
The app can be accessed here: https://kvaden19.github.io/password-generator/

Simply click "Generate Password" to begin. The user will be presented with a series of five prompts.

The first four will ask whether to include certain character types (uppercase, lowercase, numeric, and special characters). The user should choose "OK" to confirm a character type or "Cancel" to leave it out.
![Password generator user prompt](/assets/images/prompt.png "User Prompt")

Then the user will be prompted for length of password. The value must be a number and be between 8 and 128. 

Once the user has provided valid inputs for all prompts, the generated password will appear in the box above the red "Generate Password" button. 
![Password generator user prompt](/assets/images/result.png "User Prompt")

## Future Improvements
- Instead of 4 prompts for character set, show the user a list and allow them to select what they want
- Allow the user to cancel out of the process once started
- Customize "This page says..."

### Suggested Tests

#### Input Validation
##### Acceptance Criteria: User sees an appropriate error message
- No character sets
- Length < 8
- Length > 128
- Length not a number

#### Password Generation
##### Acceptance Criteria: Password is required length, includes required character types, and does NOT include any other character types.
- All character sets
- 3 character sets
    - Upper, lower, special
    - Upper, lower, numerical
    - Upper, special, numerical
    - Lower, numerical, special
- 2 character sets
    - Upper and lower
    - Upper and numerical
    - Upper and special
    - Lower and numerical
    - Lower and special
    - Numerical and special
- 1 character set
    - Upper
    - Lower
    - Numerical
    - Special
- Length = 8
- Length = 128
