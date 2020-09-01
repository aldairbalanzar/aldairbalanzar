import React from 'react';
import { motion } from 'framer-motion';

const Cover = ({isNavChanging}) => {

    const variants = {
        navIsChanging: {width: ['0%', '100%'], duration: 0.1},
        navIsNotChanging: {width: ['100%', '0%'], duration: 0.1},
    }

    return (
        <motion.div className='cover'
                variants={variants}
                style={{overflow: 'hidden'}}
                initial={'navIsNotChanging'}
                animate={isNavChanging ? 'navIsChanging' : 'navIsNotChanging' }
        >
            
        </motion.div>
    )
}

export default Cover;