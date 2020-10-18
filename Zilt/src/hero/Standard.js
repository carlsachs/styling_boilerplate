import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Link } from "react-dom";

const Wrapper = tw.div`w-screen flex justify-evenly`;

const ColumnOne = tw.div`bg-gray-200 h-screen w-1/2`;

const ColumnTwo = tw.div`bg-gray-100 h-screen w-1/2`;

const Header = tw.div`h-20 bg-white flex my-auto pl-10 pr-10`;
const Logo = tw.div`w-auto pr-10`;
const Links = tw.div`w-full space-x-8 flex h-10 my-auto `;
const TabDiv = tw.button`flex justify-items-center w-2/5 h-10 space-x-12 bg-green-400 hocus:bg-green-300 rounded text-center hocus:shadow cursor-pointer border-none`;
const Tab = tw.a`self-center text-green-800 no-underline text-sm`;

export default () => {

   return (
       <Wrapper>
        <ColumnOne>
            <Header>

            <Logo>
                <h1>Logo</h1>
            </Logo>
            <Links>

                <TabDiv>
                    Home
                </TabDiv>
                <TabDiv>
                    <Tab href="google.com">Documentation</Tab>
                </TabDiv>
                <TabDiv>
                    <Tab href="google.com">Components</Tab>
                </TabDiv>
                <TabDiv>
                    <Tab href="google.com">Premium</Tab>
                </TabDiv>   

            </Links>
            
            </Header>
        </ColumnOne>
        <ColumnTwo>
        
        </ColumnTwo>
       </Wrapper>
   ) 
    
}