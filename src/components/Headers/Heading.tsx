import React from 'react'

interface HeadingProps {
  heading: string,
  subHeading: string,
  isHeadingCenter?: boolean,
  isSubHeadingCenter?: boolean,
  customContainerStyles?: string,
  customHeadingStyles?: string,
  customSubHeadingStyles?: string,
}

const Heading: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  isHeadingCenter,
  isSubHeadingCenter,
  customContainerStyles,
  customHeadingStyles,
  customSubHeadingStyles,
}) => {

  return (
    <div className={`flex flex-col gap-2 ${customContainerStyles}`}>
      <div>
        <p className={`text-2xl text-center font-bold ${isHeadingCenter ? 'text-center' : 'text-start'} ${customHeadingStyles}`}>{heading}</p>
      </div>
      <div>
        <p className={`text-sm text-slate-400 font-medium ${isSubHeadingCenter ? 'text-center' : 'text-start'} ${customSubHeadingStyles}`}>{subHeading}</p>
      </div>
    </div>
  )
}

export default Heading