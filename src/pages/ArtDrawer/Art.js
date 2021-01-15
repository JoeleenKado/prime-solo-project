import React from 'react'
import ArtForm from './ArtForm'
import PageHeader from '../../components/PageHeader/PageHeader'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Art() {
    return(
<>
        <PageHeader 
      title="New Artist"
      subTitle="Form design with validation"
      icon={<FavoriteBorderIcon fontSize="large"/>}
      />

       <ArtForm/>
       </>
    )
}