import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="container">
      <Navbar {...args}>
        <NavbarBrand href="/">Menu de opções:</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contatos">Contatos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/api">Teste de API</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/apidog">Teste apiDOG</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/img">Teste PlaceHolder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/usuarios">Usuarios</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;