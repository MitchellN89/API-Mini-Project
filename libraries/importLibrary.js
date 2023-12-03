const prepareForOutput = (data) => {
  const output = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone || null,
      website: data.website || null,
      address: {
        street: data.addressStreet || null,
        suite: data.addressSuite || null,
        city: data.addressCity || null,
        zipcode: data.addressZipcode || null,
        geo: {
          lat: data.geoLat || null,
          lng: data.geoLng || null,
        },
      },
      company: {
        name: data.companyName || null,
        catchPhrase: data.companyCatchPhrase || null,
        bs: data.companyBS || null,
      },
    };
  });
  return output;
};

const prepareForInput = (data) => {
  const input = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone || null,
      website: data.website || null,
      addressStreet: data.address.street || null,
      addressSuite: data.address.suite || null,
      addressCity: data.address.city || null,
      addressZipcode: data.address.zipcode || null,
      geoLat: data.address.geo.lat || null,
      geoLng: data.address.geo.lng || null,
      companyName: data.company.name || null,
      companyCatchPhrase: data.company.catchPhrase || null,
      companyBS: data.company.bs || null,
    };
  });
  return input;
};

module.exports = { prepareForOutput, prepareForInput };
