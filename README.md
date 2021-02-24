# password-generator

## TODO:
- Use the given function structure
- Technically your algorithm might not pick from each of the selected criteria
    - Divide desired length into 1-4 buckets
    - Choose characters from each
- Testing
- Add the break loop for cancel
    if (!userChoice) {
	return;
}


## Future Improvements:
- Instead of 4 prompts for character set, show the user a list and allow them to select what they want
- "Cancel" on any of the character prompts breaks out of the validation loop
- Customize "This page says..."

### Tests

#### Validation
##### Acceptance Criteria: User sees expected error message
- No character sets
- Length < 8
- Length > 128

#### Password Generation
##### Acceptance Criteria: Password is required length and includes required characters
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
- Length = 16
- Length = 40
- Length = 75
