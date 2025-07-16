import { useEffect, useState } from 'react';
import React  from "react";
import './project.css'


const Project = ({projectId, projectIMGs, gitHubLink, title, details}) => {
    
  const [mouseEntered , setMouseEntered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const configureDetails = () => {
    const list_item = []
    for (var detail of details) {
      list_item.push(<li className="li-detail">{detail}</li>)
    }
    return list_item
  }

  const checkOverlap = (element1, element2) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    return !(
      rect1.right < rect2.left || 
      rect1.left > rect2.right || 
      rect1.bottom < rect2.top || 
      rect1.top > rect2.bottom
    );
  }
  
  useEffect(() => {
    const projectElement = document.getElementById(projectId);
    const frogImage = document.querySelector('.Frog-Back-Image-Projectboard');
    
    if (!projectElement || !frogImage) return;
    
    const checkForOverlap = () => {
      const projectDetails = projectElement.querySelector('.ProjectDetails');
      
      if (projectDetails) {
        const isVisible = window.getComputedStyle(projectDetails).opacity !== 0.3;
        const isOverlapping = checkOverlap(projectDetails, frogImage);
        
        if (isVisible && isOverlapping) {
          frogImage.style.opacity = 0.3;
        } else {
          // Check if ANY other project is still overlapping before showing
          const allProjects = document.querySelectorAll('[id^="project-"]');
          let anyOtherOverlapping = false;
          
          allProjects.forEach(proj => {
            if (proj.id !== projectId) {
              const otherDetails = proj.querySelector('.ProjectDetails');
              if (otherDetails) {
                const otherVisible = window.getComputedStyle(otherDetails).opacity !== 0.3;
                const otherOverlapping = checkOverlap(otherDetails, frogImage);
                if (otherVisible && otherOverlapping) {
                  anyOtherOverlapping = true;
                }
              }
            }
          });
          
          if (!anyOtherOverlapping) {
            frogImage.style.opacity = 1;
          }
        }
      }
    }
    
    const handleMouseEnter = () => {
      setTimeout(checkForOverlap, 10);
      setMouseEntered(true)
    }
    
    const handleMouseLeave = () => {
      setTimeout(checkForOverlap, 10);
      setTimeout(checkForOverlap, 10);
      setMouseEntered(false)
      setCurrentImageIndex(0) // Reset to first image when mouse leaves
    }
    
    projectElement.addEventListener('mouseenter', handleMouseEnter);
    projectElement.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', checkForOverlap);
    window.addEventListener('resize', checkForOverlap);
    
    // Initial check
    checkForOverlap();
    
    // Cleanup
    return () => {
      projectElement.removeEventListener('mouseenter', handleMouseEnter);
      projectElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', checkForOverlap);
      window.removeEventListener('resize', checkForOverlap);
    }
  }, [projectId]);

  useEffect(() => {
    if (mouseEntered && projectIMGs.length > 1) {
      const timeout = setTimeout(swapImages, 1500)
      return () => clearTimeout(timeout)
    }
  }, [mouseEntered, currentImageIndex, projectIMGs.length])

  const swapImages = () => {
    if (mouseEntered && projectIMGs && projectIMGs.length > 0) {
      setCurrentImageIndex(prev => (prev + 1) % projectIMGs.length)
    }
  }
  
  
  return (
    <div 
      className="Project-info"
      id={projectId}
    >
        <img className="Project-image" src={projectIMGs[currentImageIndex]}/>
        <div className="LinkTitle">
          <p className="ProjectTitle">{title}</p>
        <hr/>
        <div className="GitHubLinkDiv">
          <a className="GitHubLink" href={gitHubLink}>GitHub</a></div>
        </div>
        <div className="ProjectDetails">
          <ul className="ProjectDetailsUl">
            {configureDetails()}
          </ul>
        </div>
    </div>
    )

}

export default Project
