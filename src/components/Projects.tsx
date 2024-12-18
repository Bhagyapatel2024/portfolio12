

import React, { useState } from "react";

import { Github, ExternalLink } from "lucide-react";






const frontendProjects = [
  {
 title: 'Summarizex',
 description: 'Summarizex, powered by GPT-4, generates concise summaries of articles, research papers, and texts. It offers customizable options for summary length and style, a user-friendly interface for easy use, and supports various input formats like PDFs and text files, making it versatile for summarizing diverse document types.',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_v1rCPOlm9hYjEa6ryIKBqVUW2mShVhSrg&s',
 github: 'https://summarizex-bhagya-patel.vercel.app/',
 live: 'https://summarizex-bhagya-patel.vercel.app/',
 tags: ['React', 'HTML', 'CSS', 'JavaScript','Rapid API'],
},
 {
 title: 'Operating Systems Simulator',
 description: `The Operating Systems Simulator is a web app that demonstrates OS algorithms like Dining Philosophers, FIFO, SJF, and C-Look. Built with JavaScript, HTML, and CSS, it provides an interactive interface for learning OS concepts. Managed on GitHub and developed in VS Code, it’s an excellent educational tool for students.` ,
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMzB_MU4sFcONJJ2SSJJZ7CtFKOWvrT6iuw&s',
 github: 'https://os-bhagya-patel.vercel.app/',
 live: 'https://os-bhagya-patel.vercel.app/',
 tags: ['JavaScript', 'Algorithms', 'HTML','CSS'],
},

 {
 title: 'AI Image Generator',
 description: 'A React-based app that generates AI-powered images from text prompts.',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2fkxsbqJ1LKNU8y_7rH1orzo3fVfWFNa4Q&s',
 github: 'https://ai-image-generator-bhagya-patel.vercel.app/',
 live: 'https://ai-image-generator-bhagya-patel.vercel.app/',
 tags: [ 'HTML','CSS', 'API Integration'],
}


];

const fullStackProjects = [
 {
 title: 'ConnetPluse',
 description: 'Developed a chat application with React.js and Firebase, featuring secure authentication, real-time messaging, and user-friendly controls like blocking and chat lists. Integrated emoji support for expressive communication and designed a responsive interface for all devices. Leveraged Firebase real-time database for scalable user and message management, ensuring data consistency',
 image: 'https://cdn.dribbble.com/users/17323/screenshots/822440/chatapp-ios-icon.png?resize=400x300&vertical=center',
 live: 'https://connectpulse-bhagya-patel.vercel.app/',
 tags: ['React. Js', 'Firebase', 'HTML', 'CSS'],
},
{
  title: 'Nexgen Invoice Extractor',
  description: 'Developed an Invoice Management System using React and FastAPI, allowing users to upload and process invoices in PDF, image, and Excel formats. Implemented OCR with Together AI and Gemini API for data extraction, designed a file processing pipeline, and created interactive visualizations with Redux, Tailwind CSS, and chart libraries.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY4dburP35XQy_PICD_m7v5e9nONbmYfVfw&s',
  github: 'https://drive.google.com/file/d/1n1BbXYtQpHB8pwZs-OzZt_-DMSj2Joue/view?usp=drivesdk',
  live: 'https://drive.google.com/file/d/1n1BbXYtQpHB8pwZs-OzZt_-DMSj2Joue/view?usp=drivesdk',
  tags: ['React. Js', 'Together API', 'Gemini API', 'Tailwind CSS'],
 }


];

const machineLearningProjects = [
  {
    title: 'Diamond-Price-Predictor',
    description: 'Developed a machine learning tool for predictive analysis using Random Forest, Gradient Boosting, and Neural Networks. Implemented data preprocessing, feature engineering, and hyperparameter tuning to enhance accuracy. Designed the system to handle scalable classification and regression tasks across diverse datasets efficiently.',
    image: 'https://camo.githubusercontent.com/24423acfacdb118b6004e2e22d9b5771fb607fcab13066fb604026d893ea01c2/68747470733a2f2f64617461616e616c7974696373656467652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f666561747572655f656e5f6469616d6f6e645f63657274696669636174696f6e2d373737783338332e6a7067',
    github: 'https://drive.google.com/file/d/1va27aVl6F6-Y9Ra7XAaobIcEX5eTxA_F/view',
    live: 'https://drive.google.com/file/d/1va27aVl6F6-Y9Ra7XAaobIcEX5eTxA_F/view',
    tags: ['Machine Learning Algorithm', 'EDA','Streamlit'],
   },

 {
 title: 'Vehicle-valuation Hub',
 description: 'Developed a **Vehicle Valuation Hub** using machine learning to predict car resale values based on features like kilometers driven, model, make, and year. Implemented data preprocessing, feature engineering, and regression models to ensure accurate valuation. Designed the tool to assist sellers in determining the optimal selling price for their vehicles.',
 image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAACB1BMVEUrQE3////6+vjG2+Ckv8rK4eU/vrt1gIcVLj3W1tbS6OwhOUV4h5P9/ftWZHKFlKHIy9Du7vDCxcwmpluOlqKMk5jq6OcPJziltr8zQlK2ucCtwsn/pAAAAAA+R1bPOiQ2SlZHWmX++fAAGi0AIzRJQ0MfKz0sNkdmamsdNUPs3sX8w0HpwXE6Tlvd3+P2vjL7xEh/g4v/nADLJQDikIftvVLb0r62vs4UHiYAFitPXmj/yHr7ylu7z9WYqLKlrbIbJCsAABpodHwAmkHryYrovmPR1uH61IkAAA1ZXV8uNToLFyBjb3dPYWu+vLsVAAAAADcAABbp9u4ApmWS0qyysK+TkI85MC8oHBs5MzR8eXfZZVX/wFe35eSaxslJT1Nqd4W+4stmuYNOsXOo2bvW7uCAxpr/1Zu5oxcNrl6xUSn2vLtOplKN0aloik3gKBrmopvapBqapTicaDz/7c744+D/pi3ESSvTUUF1pUaEeEOgnpztpAxVTk3/2KP/sEWMkapXYX5haIZmci/demt5jaVDABSAFCh/Ijp4CCA5ADAzIEoAHU1YACSdKTkjK0ooS21cFzQAJlF4AA/eyqBUI0NQACjf0LDQslH/0jR1xcNHdYCvijkAio0ZtLFlx8Wnk1nBr4Ocimijc3f/GRn9jIt9OkP/LCv+VlW6S0/8zc0ifIRrmKAlAcM9AAAZvUlEQVR4nO2djX/bxnnHeVBsAoRo3cEEKEOiDJiQRcQmbDqtLSIWjmLezBfRjhpbsuKETvySpmnXbmuzNI6XpEsXN3EjJ223Oi9212Vrl/aP3HMA+A6SkkxJtsnfRyRAvBzue89zz70ApEKhkUYaaaSRRhppGCRq6fRu52EXpetDjC/qaTEk7nYudk9LQ8zOXH+3c7CbWhreag9iFX+IpWu7nYNdlaYPtfVF3daZdjsfuyUxpGm7nYeHQOm6tN3OykhDI9Pc/Dli13P4LaS2iesaAckHA9S38rz7bnRJMZw368cFJl9LwTRqbZRYDne5oCmHt5HfLBO5M/lyOejY+lZBglN4agX3LnkiJL0VWeE4QQ/IvW6xFMywUrt2HBOto7kWy0uiqCGrSzEPQmYYUd6Mgyl9ezBrxS0lK7of2EawVNzbSrJeFokAHw0JQQfDOyHUtIzHOQ/foIioEuJsdq7hGtowPYObFjvXwMgWvYsYDD8OB7pvcHgchqxZhF8UzXCZlbWXPGTFCHanreLnETXKsilTZgg+TGmeD2UIkW2Rz1Oa4aGA5JDT2NqEz+kiOyEM2Y/DseE4JJCnctyzvmhzlmhky0jgxZBM6RIf0hy9TFkSvIxkXhSRYLgXMT18BypN2imbpga5sXktgyxZd53fz5cp59OUlgfIz/CzFKkIIRrnKbIU5IQ4+CQnKeI4cI2kRQT4nPe28i34cRkpCjtRRoQgh4fPCGEPP+64R/OyI6YtRBApx22EOcSqsqkhDORIXqTsRMoDfiiE1KRZhuzYBCmIpJcgLRROIpyEfLn5MzjLQojYg+vVuvgOwoshQkSNSIkEVfm4ZYGPqvKLCcylswLksoykLO9ubcZPhwhOJGTJ0JGaSKhINxEJQWG6+En2mRVD3MxjOyEiadFGnG86A3MaS8CUaIJdhOGLHr6TDWMtAcVgAPmiyMNbHknJuIDsLEHlRRn2DBo/b0JmNKiSalhLQtW0wJGTejiDozrgG6YB9dm0FD7Ugq/zGElwAp9BVJYpCtuQGGTYw5c8fFGEKlvOyIABu5NeATLvNwnm3YsIRG/Gj/NmHg5XDQMMz/DPUKTzceYrxEqacNiA8Wk0b8YZfloiKOoYLqipIiIQDvA5XuRdfKuOz3v4ZghOQBQsImAB4zJkMR4yPOeHyMcaQKjO5pKFLOzhx70URI1Ty1A5eIldpAl/CaxfJsgSADIONSTE8FWkiVAwDB/8b/D4yMMPpeNGyEImuHmSZ5cDh04343u2My3w1jhPoLqyEwQEieQTWaNq6uDh8bRnfcivEOcNjVMWJWQuJlvwWaxTkQgXoWcSKufj40UjjJxFi8QXq5yLv2gyfBnlk1kZhbcZ3yY4rSkczwucrC0hnJZRk/XZVncmBTzXyoSZfXRL0DUL8RA48jomehLiYNjy8ENgWZyXLSS/qKKM3Wp9iOWIuTZcRIOwyfA1gyA5AwF0UUB5Haph3CBcRoMyyOocCWc4Ekr6+MkB4nNOUiZlkVcVLS6DK1vQ8oQViPwOhyRK9CwmvAj11HC3upHLYMdxlAcIdkKeN23LXwqIkzH2zMOr0FgQ2QilMeIcSwIMh69f2SLQYhqUIAwXMeDqfB6ahzAnJ4GdkxXK83CZvEEkgy+z5G0zbmHoD3ADDH3gv/5Lgzc+ZNtuTzOkw4c0dFjS3o4QGzS6Wz0wrZzX3S5RyF5i3XVTtO0Q67WIdpqvDzB5PV/WeNah97dWtcZ13WRbLmJqSxqfdhPReO+C6dqVbZtdxk15O8evYnOb2qN9NU1/Z22sUjux5RyxNkzokVLzLjNgW0C+RhpppJG6a8ijxQNOcfK830i78VgMmW27xOad3tRMY8qqOYZ7TSlb6TAI7x3SlLTJ8+0HdZcWJH8X4Ov2xpNqlyEL0GMBIDHNcqcZdB/vA5qySnldNUVT5GkatmpmyAznofGXTdEthTQFZnauxmZUoCMlQyHw7rxVnZYVBi6boiba7kjILRy+LFD3zB6zfw3pQfLo2UIMLWlbpI9TbGM5mZd5G/qEpkxMKQMMtgyJiiRMBX4JxnG2KYQzfIborP9mxAXBKMtayA6XhXiYHWsS2TTLVjIvGHJ4kcp6WlvidVljjx/ISwYVYClQG+ehx5hhExpwMYqzeehd2pn+d2rFIPm7vMXSFvFNSxR1PY+pWuZkk6dcWpUkWsUyBqtYVV1IY92iJIRVLLNOs0GtvC6opuTgqkKXJFnV4ViRA1smraoalinO04watgVTkAUNDE+ttGqlTU1RdSJbGqUSjABVGUZ9uuRIIaJqW8x6s9JbveNnZcOCSiWK40I2JJalBC4DvCBjnY0AkAZ0cgKnhXQZV/EiWF9WnXFsyNSyhYRGlASFY4uSLbJdWLMplhm+jsOWjMt8HifCahm674Zatq0EjJSoSg1eCsdNPuQ4VhquOggtaVuKgHFVrVJZVlNhU7FFERwY520hLBVkVjRFVU7jMi4rmgAeUrUgVKh5SYC6LKRIWcjaAqXs2KQAbizahBpWvkKpDH9QOoVxTdStKs6EVRj1SLJtnVEz8KnMKootS+BxgL+JENhDaYiAW4kAomSpcVHC4bisgr+D+9o6TVLGE6LwWXN4WRZ0mrYdMC/EtX3lvEZNTKlODQh9kgjHGmFWV0yImmFM8xkYyFIn6wgOtCNhS02yOm6WMYQ+uaxjzDxFtrCexlSGpAaCH9pqBDSyMLA0kqZ3P8MwechcKJ5lRmE7QkkwsQD7xHiIzVXzbHwTDyUNw9/tHmt6c96Am4QUTDFr1NIwIXnTXUmKRgh2Jd3JFD4Li6QRDw10dn+rEbCXxHTg3ZCdUDqoxdO6Hi5uz93+XetX9ujvBErvtfOxl7gdzv/ISEwP7aMuTOlhNL6msTYftDSUtmePdfcOiCONNNJDqGGutmJ6iYXsYX0425+yGtInc2tzNKKt7W5GdkViY4Z2gM/xPDpq+PxSz4Hs4yhRs1uqvDZcEbBjeDZcEaDzW3jaEDUAutaxaajwD3RsGib8gC8fD9VsRTusNlxfywRcNlHjTV7b9vB1fNNNEzWjR7pGGmmkkUZ6dGTyO6TOR+Z2X+LcvvEd0uWZbf2q61YkzixEdkx7Lg/mUaDB6cBCZGznFLn8cNmfH2f0O2N7dqGpeP887aDik3vGxvY4EzshwN8z1jlPsJty8SMxhWy/6BRcauzAQxX9PevH2Dd/t1vqw4xPiPvi/CW8COJaVjYsdkZnGg81vhKLYWUiZlmxmEVgHdFYDMEHgXNiFGHYugkzx2KETMSkljS4hxp/8768aT3E+DtA//DiR8YlvP2KPcT426+HF3/InX/oQ98A8aOPLL41gFJYvrY8pPjR5WuvXb2GXrv62rXlAB94vPGvXX19/zPPPPP6a1fgff/rVzuc4LHFX45yDHq/q9rimSuvRbnmMngc8NnYpYN++doVH7pFz1xZXm7ifwzwLetQ58Zr0WtB9MD/mOBjz+ZEINEAfG75ehf8l5pD4KOKzz1/CHMufRQF4YP7/6CFurbyZkv8f/TwiWARRDB3iNlfsQ51w3/jh8D/+pUr+6/sh7/rsOLS/+itRxqfWIc4yxI4dCjKCYqFuuBHnz4x/eMf7P/J1Z+8dP2ll36y/6Xr16+/dH3/m//w06d+9gjjWwAMrg8v4OYE1AWf0U//I3P/K67x9/tr+w8ePNjM/wjhg9EtQUEMP+rho0Pd8N8A+unpf2qp/sz1//mnjP+tgeCLosnzhmEkfdVXsknDeIB7h8H4HFY4zmfm+uD/3KWfnm6n/zGjB/1i6/iMOR7nzZCml/MZ2aFUlbAgWJbiCiyEsUqpHF5Ks9u0W7iBFIhPsGtybiP4h9726D33b8L/F4/+qXe2gA/cgB1KL+VlqgqW0m+imSOWQMNpPr7ZEgjCJwLaOP4bvvGnp3/ZzP/mu77xG+6/Mfw4OLOYzssqtpo7mJxiCQKuVM6fv3HB0w3Q+fOVCnMHxc+/WuaNTVWEAHz2m6cbxj9Up59+jzX5rhh/jf7gwXe4zeBTSVAIB6dEo6yLrQiVGxfWUoXZ2ZWVVaaVlZWLrlZceZtmb6bWblRYIRBqb6YSdOJDJ2cT+P/awJ/+4Q9gvLccWb76+jNv/qiB/9R3m8BPM5NHOSZUWZtdWT179uyqi5eR6eTU1MICu1MIGhuD1SnHcSYmxsNQPCtw3M21CoEmqmxs+D5qJ75ANoEffX/69Nvvvf/eJfZ24pevPf/Bh3d+9QG5+m8//ejll19+53vwguUm8E3ssXNRbi0xuybLk1MLLTeg9zQUGXvC18LCE09MOuHCxbOra+C7ihyKb6wOdOBbCtoE/qETJ95//9Kl9y6Bpt8+9Ot///jWrY9/88nkdwdf/uijjw6+zN5fforbOD4fRh4+upDIBCA30y880aGJ1OrKGjTYCjU35AHt+JbQ3tj3bPdd339vevp9WJz4+a9/c+vT2+fOffrZbyffeupgu/dvzPq6h49unF3rgt2DHvzgifzq6gV2j3FDBdCCL1iYHIIGn3Nf/sK1PvhiIP7TJ95++silp997/9Lp51449dtbt2+f+9A5d/uzTyPvNOG/tWnrI3w21Zt+z1QQPdNkYXW2wuKmLPZ9lKYFH0Y4G1ID/1Ij8p049OFnt8+tLzrPnzn36ccT3zXM7/d8N4RvSMit+DdX9vTEj3SDZ3Iunk0pKIqUfLZPK/BgE93R90/UNa18cetcjMQ+QPjDc7fu/OKphj7aML5p+xX/7GRv4/eiB4VXVm9w0HQKdu8a0MAPmMXqj//G03W9oHzy+R0U+9DCErl9a/3Q9xrauPMnVdf4ytnCA9FDDbjJHIBjP9TbywHq+BzemgM0RD69dQeN4+fvxLgvbq137t8Avh/40NrqQg/8RoPXVQuRCF1dvQHtFiL5Hr+XPEj8O5+dc4i0bnEfnPvs8pbweczwkbAafjD6qYUpOKxwNmUhLorU7v+GZID4yPnt5+fWz91eXz936w8BqfXHN5d8458d646/AfpJ6CHPpqaW5dWVCnQhkVLu5gAPgN85Crvzu89vM9363a8Dju+Pbwg14y8HPxm4p1tz36Kx1MosaFWOrMyurrEIgLpFgAb+808effao8OyzR3+vwIrCVk62rPz+6NHfC7VjuKCJUbLvNx9//ofPP/uPIPr++GbeD/srhVQqtRbOyCBKWVcf+voLrK8fcekXXHWv9zcZ/exKZgGK4eIsK1OEQ4F9gGb8Y8eOnfz+sWNHT/orz/5nbYXtEp47duy52q7nAvER56x/8odP7pyqE1MqbBzfM36UAHvh5k1/jHe2IXdwd3F29ma1UCikyvlwODwuT0zAsMeZnJys0UMRya71L0amPC+4wLEmYCnox+Va8I8fOfn9I8deOHns+DHh+0eOAP7xYyefg5Un2RZYeY7tgmOOHGX4gU0lidQ3czGJkMYjYf3w/Zrvy3sUUlEUQRAq7jifDfTX1tagbNzCmb1YG/B6w2AYB8PGahUKL8XWZm/StYueGxRYBOTkgFmxbvgnPfwj3koLvtATv0lUYsVRf3IE8GGcOufmIOiLbwZuxgc3iLbeJo4q9XLl3IKxoGQEjOuFw8qGlQyUg1sUUDbefMDq6nnWAmCaDxlJvunSYrYX/skf/vGPQiv+3bt3e1u/yQ88cGmyjh+ZnIjFWAwyDugdscjr8XRXlFjRerk0FHjpKMSP2dmC6zdQNudvXGBFy/Yoqmybcf/i4kzM6Y7/gnN7/Zx0+ngTvvTun97FpzeFjya+dD8RdcFh/1knFhfnwC24tkfb6yPd3vjR+sceR0KhcKtQO26gaK3q1UqO5cSqhDX2L5zEw4I10Yn/5N0jrolfoIdnDmMP/4iHf2p9/YtTvfEjX9bWVK8tJV/tjZBYjF523H/cQ2birBSQ1dIW+539XviKAgz+JK9ikR78HGs9ITQkBGQpncdFPS9IzygIB+CfmpuZY4wNfOHrr7/28P1dzfjLLQ8yLN+7V3fBce8I4Zv77qBixvuIda/JiDU3RbzVx/gePoGBnCerNz70dS6sXWiqMZ1FwIKyEOD8pw4fOOziOz7+C6e+mFs/1Q3/y/tN9NzevfdeqX2wHN/9v1KavAHF/PvFTb/3Epf70bdZXwmwagcgS1Pogs9lWL0QNmJ9b0s3/L33PHePRMAN7t/bu/e+F48iEPs9YCXjeYPPLVDvRFxviU2tV11uwo9yPnwf329I6ELvNcjt1j99964Li+2ZmYzagn/67rHTAfiRe669l+/fA3JX9yJs+yv3voSLeH4uqV4x+MHQ8QNSpub+Rp+oX8dvRP0N0nfD97sjrdY/dvJPf/r6vySGrx+Ya8XHf3733T+rnfhf3mPAr+ytwe/1vGEZlnuXX/UN7ReD7w21NsGa838+f2kDHNF+0W4T+Mjx62Eb/pNfrH9xGbvWP3CgDf/D9fUPpQ58ziNuwDOxWuBu3vs3q8Xu40pzMdT+/1G/Jr+GvwX6QPyaN7Lo1Io/MzOXacP3owHed+DAvk78V1rBvcJ4pb753rh3nVoj6Ee92uTiPrf3oaF6w9wDP9iN++IHNHxWvSfain8kCP/48Xb848cb+PcD8PfeX66vfuMVNDfeMkDCtejn4v/3Wz97qy/H4PC5GOnARwLAzqmd+PsgCEiHm/CxPTdXruEvB8C36m/etazWp8YdvzRc5z/47bff/k/fdn9Q+FFBRW34SKGx8bnDG8Q/0MAP8v22muBz05b5lJovMOP/71/+8pdv/9q3HR8UPoop7fjE7aDFDgfhz3TiH6jj3+9r/br7x4KGJwz///4K+q5v9NsSfkCvDzVN63v4DvUCdHmz+L2Nf+8bd/EVaTF4Oz6vuKOxWu68QgrwhQHgu2lztHF5Fz+yz68NKt0cfm/6r1Tpq2b3D8YX7eYeH7SRwvkbFCvRDm94YHzEKRV64zxux99TC8vW5vAjvemhipFxdsg33adR3X+b2GQdvJY7w5RL4XYP6NJ776mmIQ9ClcI8SzrRZA0F8CMTtVFxjM7MHc7j5NxhDCsZNTuXhTh/OCOxLbCyTzoMK/rc4TIcTF6556mL53sepf6t4f6B+HGpjo+UQqI0Pz+fg1cpUVVaHeDB8BEuumnPzycyLfh7pmreIOVpJpORVXhTZVih/kqMNm+hbAVjLL3aU3/3Ta5c/vurr9IO7ob161hImD2Tmy+yicxCEQqg2DL71W3o2hu/NjJElTOl+VyRJV1tw5/wXZ+b8KbuOf/VY8VNs6tHswMQqSETKiHazfwQ+mpdeaSUSvPFVKFYhVchVSzNJ5omAbqO3DeEjyqJ+ZKXbrXYgh+ZqM1Fb+Z7uhtQTKqtqbGut5Cb8LlCab6aArMX16pgqUIV1hqjnCjpO8Lvjh+1wOmrhRwUwVrxTL4Zf6FmJdzVQ7cotd657P5YXgMf0YRr+1yuuFacz+XATvOJRliM9p/g6I6P1krM9hBUqqlcK369Mz74L/MpTl9/quNHEVg8VV1LQeRLFXPzqTXmCbm6x28R3x0lI8Et2bUCq1y5UhM+N1NzfToeG7icfbRPmdbxWe2sVsE5C6VSIQdLWC+UzpyvmX+L+G5nAcln5qEsWZo5SD7cuHz9LoQysR2/4LJnqk9AYf9VzcO/8OJ8KpdjHgBuCpYv5XKp+VLqgfCjxG1WUKFULJRypWIKQl9L5K/H79g2wDP+sXEpkLuOH/fnOlLMMqxdZnepGP18qVAsFesz9FuJ/FGBuVZUKZbAsaApza2x+4eZzmyok9v18z0Rp9cXpMH6GXfuGuI+VM9qsVh08Qs5aP9ZIaD67RyBoOjmhBTLPcUqssAHabs3AAud+SHj2/fjRZGpTPcAwGb62K06QamWfPBUYwGxTxEGIIglbppuooXOFi425j060ZH3ng8YbVCRsfGuAYCN+DIMUYHKCREfXL7m/DmoqqXiQPCL80VoUf2KVe3AxxNjC1vR1EZ1We3iAO4dHhUYlcyZ+UIuB3ZiNipAjIamH8piEPhW1Q190POpstCntmdi3NlmTU2NB4/6vDtcWBGsyhnW8OWgXwIN33yKNX7V+TM3rAHgK9DwQRjNpdzw+mKHK04Mwsd7CSqRE9gEejeaxQpROJa/Yor1+FIw8FmDdVgogxBRWJcKQgskmJrPto8/uInOSj/4CDg2EdCrrt/jk2m5xKCZ168VWT6hIEq2Iw9CFMYP0KFk44nU/Ex7HgSnz+PDg1Fk6nLHwK9+l4/nQzkGXSyVivkq652yjn9oQL8TydKGasWGPPP59jxIM/t2Rma6vQK0POLAOn0wHofOOYSoHKMfnNyyZWkXOyJfzAj8T8GDV8g8QHrgQx7ZdEe1UK0y0w+S3uVnaVer7Rbg9u3cNyv5WC/8kMkKgCk3aHqvbOfnEx2P25Kd/AlBvrXw2yq3yZdK7lRnqTSgWt+e9lxH+FGzA79Ud2VbBxyh8M5K7+x+xPI7mYHW6B/qyM2Oa+CzPJvQQ4C/mxrhD7NG+MOsEf4wa4Q/zBrhD7NG+DupjmcyMLeVr24PTDuETywOOAkSMIcUF5iwhUIwV1GgTNgDCJzFeS+iIGWHhoE7g8+x36XACBPAZ7c9YEvFqhBYBXwL9lSgBCoWLP2tQmVH8rVT+JYAWEggioAqCHDZV5YFBZYVDvwBw2b2qyUcYd998o7aGfPvDL6CSYWrkAoBYmAVOIWrAL5gKYCvICgbqAtQQHAMeMhjh4/Yrw0qAtRogYD3QyhA8BlWFYX9SBXnboH98IHVe6j8g33Kq6tGDd8wa4Q/zBrhD7NG+MOsEf4wa8jx/x8qzgLu0jy8SQAAAABJRU5ErkJggg==',
 github: 'https://drive.google.com/file/d/1uo67WcHWSnwDqiNQMYkCNzlu-Jd3LgzM/view',
 live: 'https://drive.google.com/file/d/1uo67WcHWSnwDqiNQMYkCNzlu-Jd3LgzM/view',
 tags: ['Machine Learning Algorithm', 'EDA','Streamlit'],
},
{
  title: 'TunedML Explorer',
  description: 'Developed a machine learning tool for predictive analysis using Random Forest, Gradient Boosting, and Neural Networks. Implemented data preprocessing, feature engineering, and hyperparameter tuning to enhance accuracy. Designed the system to handle scalable classification and regression tasks across diverse datasets efficiently.',
  image: 'data:image/jpeg;base64,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',
  github: 'https://drive.google.com/file/d/1va27aVl6F6-Y9Ra7XAaobIcEX5eTxA_F/view',
  live: 'https://drive.google.com/file/d/1va27aVl6F6-Y9Ra7XAaobIcEX5eTxA_F/view',
  tags: ['Machine Learning Algorithm', 'EDA','Streamlit'],
 }
];

const Projects = () => {
  const projectCategories = [
    { title: "Frontend Projects", projects: frontendProjects },
    { title: "Full Stack Projects", projects: fullStackProjects },
    { title: "Machine Learning Projects", projects: machineLearningProjects },
    // { title: "LLM and NLP Projects", projects: llmNlpProjects },
  ];

 // Initialize the state with an array for each category
 const [currentIndexes, setCurrentIndexes] = useState(new Array(projectCategories.length).fill(0));

 // Handle next button click for each category
 const handleNext = (catIndex) => {
   setCurrentIndexes((prevIndexes) => {
     const newIndexes = [...prevIndexes];
     if (newIndexes[catIndex] < projectCategories[catIndex].projects.length - 1) {
       newIndexes[catIndex] += 1;
     }
     return newIndexes;
   });
 };

 // Handle prev button click for each category
 const handlePrev = (catIndex) => {
   setCurrentIndexes((prevIndexes) => {
     const newIndexes = [...prevIndexes];
     if (newIndexes[catIndex] > 0) {
       newIndexes[catIndex] -= 1;
     }
     return newIndexes;
   });
 };

 return (
  
  <section id="projects" className="py-20 bg-black">
  <div className="container mx-auto px-4 relative">
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-white mb-8 text-center">Projects</h2>

    {/* Loop over project categories */}
    {projectCategories.map((category, catIndex) => (
      <div key={catIndex} className="mb-16">
        {/* Category Title */}
        <h3 className="text-3xl font-semibold text-white mb-6">{category.title}</h3>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          {currentIndexes[catIndex] > 0 && (
            <button
              onClick={() => handlePrev(catIndex)}
              className="absolute left-0 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition-transform transform hover:scale-110 z-10"
              style={{ marginLeft: "20px" }}
            >
              &#8592; {/* Left Arrow */}
            </button>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden w-full max-w-7xl">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndexes[catIndex] * 100}%)`,
              }}
            >
              {/* Loop through projects */}
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg w-80 mx-2"
                >
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Project Image */}
                    <div className="relative h-64">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>
                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* GitHub and Live Links */}
                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {currentIndexes[catIndex] < category.projects.length - 1 && (
            <button
              onClick={() => handleNext(catIndex)}
              className="absolute right-0 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition-transform transform hover:scale-110 z-10"
              style={{ marginRight: "20px" }}
            >
              &#8594; {/* Right Arrow */}
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

 );
};

export default Projects;