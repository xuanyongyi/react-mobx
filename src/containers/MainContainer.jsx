import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react'
import CenteredTabs from '../components/NavBar'

// 定义主容器的位置及大小
const styles = theme => ({
    container:{
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4)
    }
});

@withStyles(styles)
@observer
class MainContainer extends React.Component {

    render(){
        const { classes } = this.props

        return (
            <Container maxWidth='xl' className={classes.container}>
                <CenteredTabs />
            </Container>
        )
    }
}

export default MainContainer