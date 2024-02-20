import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { styled } from '@mui/system';

const StyledImage = styled('img')({
    width: '80px', // Specify the desired width
    height: 'auto', // Adjust height proportionally to maintain aspect ratio
  });
const StyledDiv = styled('div')({
    display: 'flex'
})
const MyComponent = () => {
    const [teamPlaying, setTeamPlaying] = useState([]);
    const [error, setError] = useState(null);
    const [heatScore, setHeatScore] = useState(null);
    const [nuggetScore, setNuggetScore] = useState(null); 
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.request(
                'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
            );
            var teams =  response.data.events[0].competitions;
            setTeamPlaying(teams)
        } catch (error) {
            setError(error);
            console.error(error);
        }
        };

        fetchData();
         }, []);
    useEffect(() => {
    console.log(teamPlaying, 'seatTeamPlaying');
    }, [teamPlaying]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (teamPlaying.length === 0) {
    return <div>Loading scores...</div>;
  }

  return (
    <div>
        <h1>NBA Scores</h1>
        {teamPlaying.map((team) => (
            <StyledDiv key={1}>
                <span>
                    <h1>Nuggets</h1>
                    <StyledImage src={team.competitors[0].team.logo} alt="Image" />
                    <h1>{team.competitors[0].score}</h1>
                </span>
                <span>
                    <h1>Heat</h1>
                    <StyledImage src={team.competitors[1].team.logo} alt="Image" />
                    <h1>{team.competitors[1].score}</h1>
                </span>
                {/* <h1>{team.competitors[0].attendance}</h1> */}
            </StyledDiv>
        ))}
    </div>
  );
};

export default MyComponent;