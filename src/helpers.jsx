export const importSvgs = (logo, setIcon) => {
  import(`${logo}`)
    .then(dynamicImport => {
      setIcon(dynamicImport.default);
    })
    .catch(error => {
      console.error('Error importing SVG:', error);
    });
};

export const filterJobs = (data, filter) => {
    return data.filter(item => {
      const global = filter.global.toLowerCase();
      const location = filter.location.toLowerCase();
      const sGlobal = item.company.toLowerCase().includes(global) || item.position.toLowerCase().includes(global);
      const sLocation = item.location.toLowerCase().includes(location);
      const fullTime = !filter.time || item.contract === 'Full Time';
  
      return sGlobal && sLocation && fullTime;
    });
  };

  
  
  
