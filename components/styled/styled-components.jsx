import styled from 'styled-components';

export const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin:50px 0; 
`;

export const SearchInput = styled.input`
    height: 35px;
    width: 300px;
    padding: 5px;
    outline:none;

    &:hover {
        border:1px solid #3dc0cb;
    }
`;

export const ListLi = styled.li`
    text-align:center;
    background:#e2e2e2;
    width: 300px;

    @media (max-width:1024px){
        width: 260px;
    }
    @media (max-width:920px){
        width: 320px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 1em;
    margin: 0;
`;

export const DetailsTag = styled.p`
    font-size: 0.8em;    
    margin: 5px;
`;
export const DetailsSpan = styled.span`
    font-weight:bold;
`;

export const SeeMoreButton = styled.button`
    height:40px;
    width:120px;
    background:#000;
    color:#fff;
    cursor:pointer;
    border:none;
    border-radius: 5px;
`;

export const AddToCartButton = styled(SeeMoreButton)`
    background:#b76711;
`;

export const StyledDiv = styled.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height:300px
`;

export const LoadingDiv = styled.div`
    text-align:center;
    margin-top:250px;
`;