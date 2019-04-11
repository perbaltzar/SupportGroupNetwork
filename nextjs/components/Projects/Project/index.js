import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleProject from './TitleProject'
import Text from '../../Text';
import BlueLine from '../../BlueLine'

const ProjectStyle = styled.div`
background: #F3F5FF;
width: 100%;
padding-bottom: 60px;


img {
    object-fit: cover;
    width: 100%;
    height: auto;
}

&::before {
    content: "";
    background-image: linear-gradient(rgba(0,0,0,0), white, rgba(0,0,0,0));
    position: absolute;
    top: 30.5%;
    color: red;
    font-weight: bold;
    width: 100%;
    height: 15%;
}

> div {
    position: relative;
    background-color: #F3F5FF;
    margin-left: 30px;
    margin-top: -25%;
    padding:0;
}

hr {
    width: 100%;
    padding-top: 0px;
}

`
const Project = ({imageUrl, description, name, purpose, goal, headlinePurpose, headlineGoal}) => {
    return (
        <ProjectStyle>
            <img src={imageUrl}/>
            <div>
                <TitleProject text={name} padding="padding"/>
                <Text text={description}/>
                <BlueLine/>
                {(purpose == "") ? null :
                    <div>
                        <TitleProject text={headlinePurpose}/>
                        <Text text={purpose}/>
                        <BlueLine/>
                    </div>
                }
                {(goal == "") ? null :
                    <div>
                        <TitleProject text={headlineGoal}/>
                        <Text text={goal}/>
                        <BlueLine/>
                    </div>
                }

            </div>
        </ProjectStyle>
    );
};

Project.propTypes = {
    
};

export default Project;