
import { Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// define path 
const pathData ="M0.762512 111V1H44.7625V22.25H23.1375V43.6875H43.8875V64.375H23.1375V89.5625H46.2V111H0.762512ZM79.625 111V74.8125L62.0625 1H83.875L90 38.25L96.125 1H117.875L100.375 74.8125V111H79.625ZM130.238 111L140.863 1H178.175L188.613 111H167.8L166.238 93.25H152.988L151.613 111H130.238ZM154.55 75.6875H164.55L159.738 19.75H158.738L154.55 75.6875ZM208.163 111V1H230.788L240.913 53.6875V1H262.163V111H240.663L229.663 56V111H208.163ZM324.513 111L335.138 1H372.45L382.888 111H362.075L360.513 93.25H347.263L345.888 111H324.513ZM348.825 75.6875H358.825L354.013 19.75H353.013L348.825 75.6875ZM402.438 111V1H425.062L435.188 53.6875V1H456.438V111H434.938L423.938 56V111H402.438ZM478.988 111V1H509.238C517.154 1 523.113 3.20833 527.113 7.625C531.113 12 533.113 18.4167 533.113 26.875V78.375C533.113 88.7917 531.279 96.8333 527.613 102.5C523.988 108.167 517.613 111 508.488 111H478.988ZM501.113 91.5625H504.925C508.967 91.5625 510.988 89.6042 510.988 85.6875V28.9375C510.988 25.2708 510.488 22.9167 509.488 21.875C508.529 20.7917 506.55 20.25 503.55 20.25H501.113V91.5625ZM554.913 111V1H598.913V22.25H577.288V43.6875H598.038V64.375H577.288V89.5625H600.35V111H554.913ZM620.463 111V1H654.213C659.838 1 664.088 2.29167 666.963 4.875C669.838 7.41667 671.754 11 672.713 15.625C673.713 20.2083 674.213 25.6042 674.213 31.8125C674.213 37.8125 673.442 42.6042 671.9 46.1875C670.4 49.7708 667.546 52.25 663.338 53.625C666.796 54.3333 669.213 56.0625 670.588 58.8125C672.004 61.5208 672.713 65.0417 672.713 69.375V111H651.025V67.9375C651.025 64.7292 650.358 62.75 649.025 62C647.733 61.2083 645.629 60.8125 642.713 60.8125V111H620.463ZM642.838 41.75H648.15C651.192 41.75 652.713 38.4375 652.713 31.8125C652.713 27.5208 652.379 24.7083 651.713 23.375C651.046 22.0417 649.796 21.375 647.963 21.375H642.838V41.75ZM720.388 112C710.346 112 703.096 109.5 698.638 104.5C694.221 99.5 692.013 91.5417 692.013 80.625V69.875H713.763V83.625C713.763 86.1667 714.138 88.1667 714.888 89.625C715.679 91.0417 717.033 91.75 718.95 91.75C720.95 91.75 722.325 91.1667 723.075 90C723.867 88.8333 724.263 86.9167 724.263 84.25C724.263 80.875 723.929 78.0625 723.263 75.8125C722.596 73.5208 721.429 71.3542 719.763 69.3125C718.138 67.2292 715.867 64.8125 712.95 62.0625L703.075 52.6875C695.7 45.7292 692.013 37.7708 692.013 28.8125C692.013 19.4375 694.179 12.2917 698.513 7.375C702.888 2.45833 709.2 0 717.45 0C727.533 0 734.679 2.6875 738.888 8.0625C743.138 13.4375 745.263 21.6042 745.263 32.5625H722.888V25C722.888 23.5 722.45 22.3333 721.575 21.5C720.742 20.6667 719.596 20.25 718.138 20.25C716.388 20.25 715.096 20.75 714.263 21.75C713.471 22.7083 713.075 23.9583 713.075 25.5C713.075 27.0417 713.492 28.7083 714.325 30.5C715.158 32.2917 716.804 34.3542 719.263 36.6875L731.95 48.875C734.492 51.2917 736.825 53.8542 738.95 56.5625C741.075 59.2292 742.783 62.3542 744.075 65.9375C745.367 69.4792 746.013 73.8125 746.013 78.9375C746.013 89.2708 744.096 97.375 740.263 103.25C736.471 109.083 729.846 112 720.388 112ZM792.438 112C783.646 112 776.917 109.354 772.25 104.062C767.625 98.7292 765.312 91.0417 765.312 81V28.75C765.312 19.3333 767.604 12.1875 772.188 7.3125C776.812 2.4375 783.562 0 792.438 0C801.312 0 808.042 2.4375 812.625 7.3125C817.25 12.1875 819.562 19.3333 819.562 28.75V81C819.562 91.0417 817.229 98.7292 812.562 104.062C807.938 109.354 801.229 112 792.438 112ZM792.625 91.75C795.958 91.75 797.625 88.5208 797.625 82.0625V28.375C797.625 22.9583 796 20.25 792.75 20.25C789.083 20.25 787.25 23.0208 787.25 28.5625V82.1875C787.25 85.6042 787.667 88.0625 788.5 89.5625C789.333 91.0208 790.708 91.75 792.625 91.75ZM841.237 111V1H863.862L873.987 53.6875V1H895.237V111H873.737L862.737 56V111H841.237Z";

console.log(pathData)


const NameAnimation = () => {
    return (
      <Flex marginLeft={'6rem'} direction={'column'} align={'center'} alignContent={'center'} maxW={'100%'}  justifyContent={'center'}>
      <AnimatePresence>
      <svg className="animation-name" xmlns="http://www.w3.org/2000/svg" width={'1000px'} height={'300px'} >
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke="#111111"
          d={pathData}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 30 }}
        />
      </svg>
      </AnimatePresence>
      </Flex>
    );
  };
  
  export default NameAnimation;