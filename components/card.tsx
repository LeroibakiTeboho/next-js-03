const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: '100px',
        margin: '0px',
        boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexFlow: 'column',
    };

    return <div style={cardStyle}>{children}</div>
};

export default Card;