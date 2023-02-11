import { Ribbon } from './components/ribbon/ribbon';

export const App = () => {
  return (
    <div className='min-h-screen bg-blue-800 p-8'>
      <div className='relative mx-auto bg-white rounded-xl shadow-xl h-80 w-96'>
        <Ribbon>Top Right</Ribbon>
        <Ribbon position='top-left' color='green'>
          Top Left
        </Ribbon>
        <Ribbon position='bottom-left' color='purple'>
          Bottom Left
        </Ribbon>
        <Ribbon position='bottom-right' color='cyan'>
          Bottom Right
        </Ribbon>
      </div>
    </div>
  );
};
