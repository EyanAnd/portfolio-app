import { motion} from "framer-motion"

export default function ListComponent() {
    return (
        <>
            <motion.ul 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
            </motion.ul>
        </>
    )
}
