import React, { Component } from 'react';
// json-server --watch catalog.json --port 3002
class Services extends Component {
      getRes = async(url, data, good = "") => {
         const res = await fetch(`${url}/${data}/${good}`);
         if(!res.ok) {
            alert("Error!!!!")
         }
         return await res.json()
      }
    
}

export default Services;