  const accessKey = "FXGuJGOSDQphde37LKO5xLRn0MDHXNGHauesHY2jOUE";

  async function getUnsplashImages() {
      try {
          const response = await fetch(`https://api.unsplash.com/photos/random?count=10`, {
              headers: {
                  'Authorization': `Client-ID ${accessKey}`
              }
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Unsplash data:', data);
        
          data.forEach(image => {
              const card = document.createElement('div');
              card.className = 'card';
            
              const img = document.createElement('img');
              img.src = image.urls.regular;
              img.alt = image.alt_description || 'Unsplash Image';
            
              card.appendChild(img);
              document.body.appendChild(card);
          });

          return data;
      } catch (error) {
          console.error('Error fetching data from Unsplash:', error);
      }
  }

  getUnsplashImages();
