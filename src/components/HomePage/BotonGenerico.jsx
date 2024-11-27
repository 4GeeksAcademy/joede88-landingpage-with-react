import Button from 'react-bootstrap/Button';

const BotonGenerico = ({ texto, margen}) => {
    return (
        <>
            <Button variant="primary" style={{marginBottom: margen }}>
                {texto}
            </Button>
        </>
    )
}

export default BotonGenerico