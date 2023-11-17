```
const isUpperCase = new RegExp(/(?=.*[A-Z])/g)
const isSpecialChar = new RegExp(/(?=./*[!@#$%^&*])/g)
const isLowerCase = new RegExp(/(?=./*[a-z])/g)
const isLong = new RegExp(/(?=.{7,})/g)
const checkIsWhiteSpacefromBegAndEnd = new RegExp(/^[^][\w\W]*[^]/g)

const passwordValidation = (currentPassword: string): boolean => {
 if(
   currentPassword.match(isUpperCase) &&
   currentPassword.match(isSpecialChar) &&
   currentPassword.match(isLowerCase) &&
   currentPassword.match(isLong) && 
   currentPassword.match(checkIsWhiteSpacefromBegAndEnd) 
 ) {
   return true
 }
 return false
}
For the tests I am using Jest and taking a TDD approach.
You can write lots of tests these are just a few of the samples I wrote.
describe('Given the pssword validation function', () => {
 test('test passing requirements', () => {
  expect(passwordValidation('Aa!1uj8h')).toBe(true)
  expect(passwordValidation('1_c_A_!2')).toBe(true)
  expect(passwordValidation('A b 1 ! 2 %')).toBe(true)
  expect(passwordValidation('_13Bbhjj@}}j>_')).toBe(true)
})

test('test failing password requirements', () => {
 expect(passwordValidation(' ahhhhh')).toBe(false)
 expect(passwordValidation(' aAhhhhh')).toBe(false)
 expect(passwordValidation(' aA122hhhhh')).toBe(false)
 expect(passwordValidation(' 111111122')).toBe(false)
 expect(passwordValidation(' 111111122aA')).toBe(false)
 expect(passwordValidation(' Bba !')).toBe(false)
 })
})


export const passwordValidation = Yup.string()
  .trim()
  .required('Required')
  .matches(
    /(?=.*[A-Z])/,
    'Your password needs to have at least one capital letter',
  )
  .matches(
    /(?=.*[!@#$%^&*])/,
    'Your password needs to have at least one special character',
  )
  .matches(
    /(?=.*[a-z])/,
    'Your password needs to have at least one lower case character',
  )
  .matches(/(?=.*[0-9])/, 'Your password needs to have at least one number')
  .min(8)
  .max(200)


```
