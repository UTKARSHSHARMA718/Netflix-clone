'use client'

import Chips from '@/components/Chips/Chips';
import StarRating from '@/components/StarRating/StarRating';
import React, { useState } from 'react'

const FiltersPage = () => {
    const [rating, setRating] = useState(1);// star selection
    const [langauge, setLanguage] = useState("en");//drop-down
    const [resolution, setResolution] = useState(1080);//chips
    const [directedBy, setDirectedBy] = useState(""); // drop down
    const [releasedAfter, setReleasedAfter] = useState(1950); // slider
    const [genre, setGenre] = useState(""); // dropdown
    const [duration, setDuration] = useState(1); // slider
    const [type, setType] = useState(""); //done

    return (
        <div className='pt-40'>

            {/* filters */}
            <div className='p-4'>
                {/* langauges */}
                <div>
                    <select name="language" >
                        <option value="en">English</option>
                        <option value="en">Hindi</option>
                        <option value="en">Spanish</option>
                        <option value="en">Mandrin</option>
                        <option value="en">French</option>
                    </select>
                    
                    <select name="language" >
                        <option value="en">Action</option>
                        <option value="en">Adventure</option>
                        <option value="en">Comedy</option>
                        <option value="en">Sci-fi</option>
                        <option value="en">Fantasy</option>
                        <option value="en">Disaster</option>
                        <option value="en">Documentry</option>
                    </select>
                   
                    <select name="language" >
                        <option value="en">Morten Tyldum</option>
                        <option value="en">David Fincher</option>
                        <option value="en">Colin Trevorrow</option>
                        <option value="en">Joe Johnston</option>
                        <option value="en">Steven Spielberg</option>
                        <option value="en">J. A. Bayona</option>
                        <option value="en">Stephen Sommers</option>
                        <option value="en">Roland Emmerich</option>
                        <option value="en">Doug Liman</option>
                        <option value="en">Guy Ritchie</option>
                        <option value="en">Joe Russo</option>
                        <option value="en">Joss Whedon</option>
                        <option value="en">Anthony Russo</option>
                        <option value="en">Christopher Nolan</option>
                        <option value="en">Zack Snyder</option>
                        <option value="en">Bassam Kurdali</option>
                        <option value="en">Colin Levy</option>
                        <option value="en">Sacha Goedegebure</option>
                    </select>

                    <div>
                        <Chips label='720p'/>
                        <Chips label='1080p'/>
                        <Chips label='1440p'/>
                    </div>

                    <div>
                        <Chips label='Movie'/>
                        <Chips label='Series'/>
                    </div>

                    <StarRating rating={2.6} />
                </div>
            </div>

        </div>
    )
}

export default FiltersPage