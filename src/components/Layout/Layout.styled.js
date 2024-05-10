import styled from '@emotion/styled';

export const MainContent = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    padding: 72px 20px 20px 20px;
    //min-height: 80vh;
    min-height: calc(100vh - 72px);
    background-color: #ffffff;
`;

// export const MainContent = styled('main')(({theme}) => ({
//     marginTop: 64, // Adjust according to your AppBar's actual height
//     marginX: 'auto',
//     padding: theme.spacing(3),
//     minHeight: '100vh', // Optional: Ensures full height for smaller content areas
//     maxWidth: '1200px',
//     width: '100%', // Ensures the content takes full width minus any side drawers if you use them
//     backgroundColor: '#ffffff',
// }));

// export const MainContent = styled('main')(({theme}) => ({
//     paddingTop: '72px', // Adjust this value if your header is taller
//     // padding: theme.spacing(3),
//     minHeight: 'calc(100vh - 64px)', // Adjust this value too if your header is taller
// }));
