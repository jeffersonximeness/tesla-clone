import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: sticky;
    top: 0;
    height: 100vh;
    margin: -100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`