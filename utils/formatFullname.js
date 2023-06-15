module.exports = (fullName) => {
  if (typeof fullName != 'string') return 'Error';
  const fullNameArray = fullName.split(' ');
  const [firstName, lastName] = fullNameArray;
  if (!firstName || !lastName) return 'Error';
  if (fullNameArray.length > 2) return 'Error';
  if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName))
    return 'Error';

  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
