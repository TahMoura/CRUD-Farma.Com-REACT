import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-green-950'>Nova Categoria</button>} modal>
        <div>
          <FormularioCategoria />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;