import {useTranslation} from "react-i18next";


import "./header.scss";
import {AppBar, Container} from "@mui/material";

interface HeaderProps {
  className?: string
}

const Header = ({className}: HeaderProps) => {
  const {t} = useTranslation("core");

  return (
    <AppBar>
      <Container>

      </Container>

    </AppBar>
  );
};

export default Header;