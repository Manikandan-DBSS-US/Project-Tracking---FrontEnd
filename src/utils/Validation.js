function isEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

function ValidatePhoneNumber(phone) {
  return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
}

export const registerValidation = ({
  userName,
  firstName,
  lastName,
  email,
  password,
  dateOfBirth,
  gender,
  phoneNumber,
}) => {
  const error = {};

  if (!userName) {
    error.userName = "UserName  is required";
  }
  if (!firstName) {
    error.firstName = "First Name  is required";
  }
  if (!lastName) {
    error.lastName = "Last Name is required";
  }
  if (!email) {
    error.email = "Email is required";
  } else if (!isEmail(email)) {
    error.email = "Enter valid email";
  }
  if (!password) {
    error.password = "Password is required";
  } else if (password.length < 6) {
    error.password = "Password must be more than 6 characters";
  }
  if (!dateOfBirth) {
    error.dateOfBirth = "Date of birth is required";
  }
  if (!gender) {
    error.gender = "Gender is required";
  }
  if (!gender) {
    error.gender = "Gender is required";
  }
  if (!phoneNumber) {
    error.phoneNumber = "Phone Number is required";
  } else if (!ValidatePhoneNumber(phoneNumber)) {
    error.phoneNumber = "Enter valid phone number ";
  }

  return error;
};

export const loginValidation = ({ userName, password }) => {
  const error = {};
  if (!userName) {
    error.userName = "Username  is required";
  }
  if (!password) {
    error.password = "Password  is required";
  }

  return error;
};

export const taskCreateValidation = ({
  name,
  description,
  dueDate,
  effort,
  isCompleted,
  isVerified,
}) => {
  const error = {};
  if (!name) {
    error.name = "Name is required";
  }
  if (!description) {
    error.description = "Description is required";
  }
  if (!dueDate) {
    error.dueDate = "Due Date is required";
  }
  if (!effort) {
    error.effort = "Effort is required";
  }
  if (!isCompleted) {
    error.isCompleted = "Is Completed is required";
  }
  if (!isVerified) {
    error.isVerified = "Is Verified is required";
  }

  return error;
};
