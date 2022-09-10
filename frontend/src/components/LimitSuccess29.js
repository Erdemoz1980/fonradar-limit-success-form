import { useState } from 'react';
import tedIcon from '../assets/icons/tedarikciler.png';
import limitIcon from '../assets/icons/limit.png'
import clients from '../sampleData';

const LimitSuccess29 = () => {
  const [notification, setNotification] = useState(true);

  return (
    <div className='limit_bltr_success29'>
     <div className='container'>
      <nav className='navbar'>
  
          <div className='logo'>
         Fon Radar
          </div>

          <ul className='menu'>
            <li>Fatura Yukle</li>
            <li>Faturalarin Durumu</li>
            <li>Temlik Edilen Faturalar</li>
            <li>Vadesi Yaklasan Faturalar</li>
          </ul>

          <div className='notifications'>
            <div className='icon-container'>
              <i className="fa-regular fa-bell"></i>
              {notification && <div className='red-dot'></div>}
            </div>
            <div className='anchor-container'>
              <a href='/'>A</a>
            </div>
          </div>
      
      </nav>

        <div className='rectangle-left'>
          
          <div className='tedarik-bg'>
             <div className='tedarik-menu'>
            <img src={tedIcon} alt='tedarikciler'  />
            <h5>Tedarikçilerim</h5>
          </div>
          </div>
         
         
          <div className='limit-menu'>
            <img src={limitIcon} alt='limit' />
            <h5>Limit Bölüştür</h5>
          </div>
      </div>

        
        <section className='table-section'>
       
        <h2 className='table-title'>Tedarikçilerim</h2>
   

      <table className='table-content'>
          <tr>
            <th>Tedarikçi Ünvanı</th>
            <th>Vergi Kimlik No</th>
            <th>Ad/Soyad</th>
            <th>Tel No</th>
            <th>Email</th>
          </tr>
            {
              clients.length > 0 && clients.map(client => (
                <tr key={client.vergiNo}>
                  <td>{client.unvan}</td>
                  <td>{client.vergiNo}</td>
                  <td>{client.name}{' '}{client.lastName}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                </tr>
              ))
         }
       
      </table>
        </section>
  

      </div>
    </div>
  )
};

export default LimitSuccess29