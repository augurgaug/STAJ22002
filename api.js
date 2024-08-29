import axios from 'axios';
import {API_URL} from'./src/constant/Link'


export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);

    return response.data;

  } catch (error) {
    throw error;
  }
};


export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, user);

    return response.data;

  } catch (error) {
    throw error;
  }
};


export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);

    return response.data;

  } catch (error) {
    throw error;
  }
};







export const getCari = async () => {
  try {
    const response = await axios.get(`${API_URL}/caris`);

    return response.data;

  } catch (error) {
    throw error;
  }
};
export const getCariById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/caris/${id}`);

    return response.data;

  } catch (error) {
    throw error;
  }
};


  

export const getFinance = async () => {
  try {
    const response = await axios.get(`${API_URL}/finance`);

    return response.data;

  } catch (error) {
    throw error;
  }
};

export const getFinanceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/finance/${id}`);

    return response.data;

  } catch (error) {
    throw error;
  }
};












export  const fetchUserCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/count`);

    return response.data;
  } catch (error) {
    console.error("Kullanıcı sayısı alınırken hata oluştu:", error);
    
  }}

  export  const fetchCariCount = async () => {
    try {
      const response = await axios.get(`${API_URL}/caris/count`);
  
      return response.data;``
    } catch (error) {
      console.error('carisayısı alınırken hata oluştu:', error);
      
    }}


    export  const fetchFinanceCount = async () => {
      try {
        const response = await axios.get(`${API_URL}/finance/count`);
    
        return response.data;
      } catch (error) {
        console.error('Finance sayısı alınırken hata oluştu:', error);
        
      }}
      export  const fetchFinanceNOCount = async () => {
        try {
          const response = await axios.get(`${API_URL}/finance/count/nakitodeme`);
      
          return response.data;
        } catch (error) {
          console.error('no sayısı alınırken hata oluştu:', error);
          
        }}
        export  const fetchFinanceNTCount = async () => {
          try {
            const response = await axios.get(`${API_URL}/finance/count/nakittahsilat`);
        
            return response.data;
          } catch (error) {
            console.error('nt sayısı alınırken hata oluştu:', error);
            
          }}
          export  const fetchFinanceGiHCount = async () => {
            try {
              const response = await axios.get(`${API_URL}/finance/count/gidenhavale`);
          
              return response.data;
            } catch (error) {
              console.error('hih sayısı alınırken hata oluştu:', error);
              
            }}
            export  const fetchFinanceGeHCount = async () => {
              try {
                const response = await axios.get(`${API_URL}/finance/count/gelenhavale`);
            
                return response.data;
              } catch (error) {
                console.error('geh sayısı alınırken hata oluştu:', error);
                
              }}
              export  const fetchFinancePTCount = async () => {
                try {
                  const response = await axios.get(`${API_URL}/finance/count/postahsilat`);
              
                  return response.data;
                } catch (error) {
                  console.error('pt sayısı alınırken hata oluştu:', error);
                  
                }}
                export  const fetchFinanceKKCount = async () => {
                  try {
                    const response = await axios.get(`${API_URL}/finance/count/kkodeme`);
                
                    return response.data;
                  } catch (error) {
                    console.error('kko sayısı alınırken hata oluştu:', error);
                    
                  }}

                  export const createUser = async (user) => {
                    try {
                      const response = await axios.post(`${API_URL}/users`, user);
                      return response.data;
                    } catch (error) {
                      if (error.response && error.response.status === 409) {
                        throw new Error("Kullanıcı zaten kayıtlı");
                      }
                      console.error('kayıt olurken hata oluştu:', error);
                      throw error;
                    }
                  };