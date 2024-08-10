export async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/?result=10');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log('Data fetched:', data); // Tambahkan logging
    return data.results[0];
  } catch (error) {
    console.error('Error fetching data:', error); // Tambahkan logging error
    throw error;
  }
}