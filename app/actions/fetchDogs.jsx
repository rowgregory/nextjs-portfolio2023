import { headers } from '../utils/headers.jsx';

export async function fetchDogs() {
  const data = await fetch(
    'https://api.rescuegroups.org/v5/public/orgs/5798/animals/search/dogs?limit=250&sort=-%2Banimals.adoptedDate',
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        data: {
          filters: [
            {
              fieldName: 'statuses.name',
              operation: 'equal',
              criteria: 'Free Roaming',
            },
          ],
        },
      }),
    }
  );

  const response = await data.json();

  if (response) {
    // Add photos and coordinates fields to attributes object
    response?.data?.forEach(obj => {
      obj.attributes.photos = [];
      obj.attributes.coordinates = {};
      obj.attributes.videos = [];
    });

    if (!response?.data || response.data.length === 0) {
      console.log('Error: No response data from RG -->', response?.data);
      return response;
    }

    const includedArray = response.included
      ?.filter(obj => obj.type === 'pictures')
      ?.map(obj => obj.attributes.original.url);
    const includedVideourlArray = response.included
      ?.filter(obj => obj.type === 'videourls')
      ?.map(obj => ({
        url: obj.attributes.url,
        urlThumbnail: obj.attributes.urlThumbnail,
        id: obj.id,
      }));
    const includedArrayLocations = response.included
      ?.filter(obj => obj.type === 'locations')
      ?.map(obj => ({
        id: obj.id,
        lat: obj.attributes.lat,
        lon: obj.attributes.lon,
      }));

    const urlImgLinkArray = includedArray?.filter(e => typeof e === 'string');
    const coordinatesArray = includedArrayLocations?.filter(
      e => e !== undefined
    );
    const videoObjArray = includedVideourlArray?.filter(
      e => typeof e === 'object'
    );

    // Put URL into photos array if animal id is part of imageUrl
    response.data?.forEach(obj => {
      urlImgLinkArray?.forEach(link => {
        if (link.includes(obj.id)) {
          obj.attributes.photos.push(link);
        }
      });

      coordinatesArray?.forEach(newObj => {
        if (newObj.id === obj?.relationships?.locations?.data[0]?.id) {
          obj.attributes.coordinates.lat = newObj.lat;
          obj.attributes.coordinates.lon = newObj.lon;
        }
      });

      videoObjArray?.forEach(newObj => {
        if (newObj.id === obj?.relationships?.videourls?.data[0]?.id) {
          obj.attributes.videos.push(newObj);
        }
      });
    });

    return response;
  }

  return response;
}
