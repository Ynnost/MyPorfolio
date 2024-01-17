import { Col } from "react-bootstrap";

export type ProjectType = {
  title: string;
  description: string;
  imgUrl: string;
};

export const ProjectCard:React.FC<ProjectType> = ({title, description, imgUrl}) => {
  return (
   <Col sm={6} md={4}>
      <div className="proj-imgbx">
         <img src={imgUrl} alt=""/>
         <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
         </div>
      </div>
   </Col>
  );
};
