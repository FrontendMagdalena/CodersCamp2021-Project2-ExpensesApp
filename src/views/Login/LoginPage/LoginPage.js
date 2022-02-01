import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AccountsContext } from '../../../reducers/accounts.reducer';
import { EMAIL_VERIFICATION_REGEX } from '../../../utils/helpers/validation.helpers';
import { Input } from '../../../components/Input/Input';
import { PrimaryButton } from '../../../components/Button/Button';
import {
  StyledLoginPage,
  StyledLogo,
  StyledIcon,
  StyledTitle,
  StyledText,
  StyledMessage,
  StyledValidation,
  StyledUserNotExists,
} from './LoginPage.styles';
import icon from '../../../assets/Icon.png';

export default function LoginPage() {
  const { users } = useContext(AccountsContext);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'admin@gmail.com',
      password: 'AwD,H6s\\cWFJ73?f',
    },
  });

  const onSubmit = (data, event) => {
    const form = event.target;

    let filteredUsers = users.filter((user) => {
      console.log(user.email === data.email);
      console.log(user.password === data.password);
      return user.email === data.email && user.password === data.password;
    });

    if (filteredUsers.length) {
      navigate('/main');
    }

    setUserMessage('Użytkownik nie istnieje');
    form.reset();
  };

  return (
    <StyledLoginPage>
      <StyledLogo>
        <StyledIcon src={icon} />
        <StyledTitle>crooge</StyledTitle>
      </StyledLogo>
      <StyledText>Logowanie:</StyledText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledValidation>
          <Input
            type="e-mail"
            name="email"
            inputLabel="e-mail:"
            {...register('email', {
              required: 'Adres e-mail jest wymagany',
              pattern: {
                value: EMAIL_VERIFICATION_REGEX,
                message: 'Adres e-mail jest wymagany',
              },
            })}
          />
          <StyledMessage>{errors.email?.message}</StyledMessage>
        </StyledValidation>
        <StyledValidation>
          <Input
            type="password"
            inputLabel="hasło:"
            name="password"
            {...register('password', {
              required: 'Wpisz hasło, minimum 7 symbolów',
              minLength: {
                value: 7,
                message: 'Wpisz hasło, minimum 7 symbolów',
              },
            })}
          />
          <StyledMessage>{errors.password?.message}</StyledMessage>
        </StyledValidation>
        <PrimaryButton
          className="xxx"
          text="Logowanie"
          isActive={true}
          type="submit"
        />
      </form>
      {userMessage && (
        <>
          <StyledUserNotExists>{userMessage}</StyledUserNotExists>
          <Link to="/register">
            <PrimaryButton className="xxx" text="Rejestracja" isActive={true} />
          </Link>
        </>
      )}
    </StyledLoginPage>
  );
}
