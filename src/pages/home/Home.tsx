import { Link } from 'react-router-dom';
import homeLogo from '../../assets/homeLogo.svg'
import ModalPostagem from '../../components/categories/modalCategoria/ModalCategoria';

function Home() {
    
    return (
        <>
            <div className="bg-green-950 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Bem vindo a Farma.Com!</h2>
                        <p className='text-xl'>Descubra este vasto universo de bem-estar, onde você pode se conectar a uma infinidade de soluções para a saúde. </p>
                        <div className="flex justify-around gap-4">
                        <ModalPostagem />
                        <button className='rounded bg-white text-green-800 py-2 px-4'>
                        <Link to="/categorias">Ver Categorias</Link>
                        </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;