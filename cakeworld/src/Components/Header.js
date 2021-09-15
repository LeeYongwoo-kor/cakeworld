import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header``;
const Body = styled.div``;
const Item = styled.li``;
const SLink = styled(Link)``;

const Main = () => (
  <>
    <Header></Header>
    <Body>
        <List>
            <Item current={}>
                <SLink to="/carts"></SLink>
            </Item>
            <Item current={}>
                <SLink to="/items"></SLink>
            </Item>
            <Item current={}>
                <SLink to="/login"></SLink>
            </Item>
        </List>
    </Body>
  </>
);

export default withRouter(Main);
