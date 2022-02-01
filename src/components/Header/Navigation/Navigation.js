import { Link } from 'react-router-dom';
import plus from '../../../assets/plus.png';
import settings from '../../../assets/settings.png';
import alarm from '../../../assets/alarm.png';
import diagram from '../../../assets/diagram.png';
import poweroff from '../../../assets/power-off.png';
import {
  StyledIcon,
  StyledItem,
  StyledLine,
  StyledList,
  StyledName,
  StyledNav,
} from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLine />
      <StyledList>
        <Link to="/new">
          <StyledItem>
            <StyledIcon src={plus} />
            <StyledName>Dodaj</StyledName>
          </StyledItem>
        </Link>
        <Link to="/settings">
          <StyledItem>
            <StyledIcon src={settings} />
            <StyledName>Ustawienia</StyledName>
          </StyledItem>
        </Link>
        <Link to="/alerts">
          <StyledItem>
            <StyledIcon src={alarm} />
            <StyledName>Powiadomienia</StyledName>
          </StyledItem>
        </Link>
        <Link to="/charts">
          <StyledItem>
            <StyledIcon src={diagram} />
            <StyledName>Wykresy</StyledName>
          </StyledItem>
        </Link>
        <StyledItem>
          <StyledIcon src={poweroff} />
          <StyledName>Wyloguj</StyledName>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;
