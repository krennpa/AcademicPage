#!/usr/bin/env python3
"""
Content extraction script to migrate from Hugo Academic site to modern Next.js site
"""

import os
import yaml
import json
import re
from pathlib import Path
from typing import Dict, List, Any

class ContentExtractor:
    def __init__(self, hugo_path: str, output_path: str):
        self.hugo_path = Path(hugo_path)
        self.output_path = Path(output_path)
        self.output_path.mkdir(exist_ok=True)
        
    def extract_author_info(self) -> Dict[str, Any]:
        """Extract author information from Hugo site"""
        author_path = self.hugo_path / "content" / "authors" / "admin" / "_index.md"
        
        if not author_path.exists():
            return {}
            
        with open(author_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Split frontmatter and content
        parts = content.split('---')
        if len(parts) >= 3:
            frontmatter = yaml.safe_load(parts[1])
            return frontmatter
        return {}
    
    def extract_publications(self) -> List[Dict[str, Any]]:
        """Extract publications from Hugo site"""
        publications_dir = self.hugo_path / "content" / "publication"
        publications = []
        
        if not publications_dir.exists():
            return publications
            
        for pub_dir in publications_dir.iterdir():
            if pub_dir.is_dir():
                index_file = pub_dir / "index.md"
                if index_file.exists():
                    with open(index_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    parts = content.split('---')
                    if len(parts) >= 3:
                        frontmatter = yaml.safe_load(parts[1])
                        publications.append(frontmatter)
        
        return publications
    
    def extract_projects(self) -> List[Dict[str, Any]]:
        """Extract projects from Hugo site"""
        projects_dir = self.hugo_path / "content" / "project"
        projects = []
        
        if not projects_dir.exists():
            return projects
            
        for proj_dir in projects_dir.iterdir():
            if proj_dir.is_dir():
                index_file = proj_dir / "index.md"
                if index_file.exists():
                    with open(index_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    parts = content.split('---')
                    if len(parts) >= 3:
                        frontmatter = yaml.safe_load(parts[1])
                        projects.append(frontmatter)
        
        return projects
    
    def extract_experience(self) -> Dict[str, Any]:
        """Extract experience from Hugo site"""
        exp_file = self.hugo_path / "content" / "home" / "experience.md"
        
        if not exp_file.exists():
            return {}
            
        with open(exp_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        parts = content.split('---')
        if len(parts) >= 3:
            frontmatter = yaml.safe_load(parts[1])
            return frontmatter
        return {}
    
    def extract_all_content(self):
        """Extract all content and save to JSON files"""
        print("Extracting content from Hugo academic site...")
        
        # Extract all sections
        author_info = self.extract_author_info()
        publications = self.extract_publications()
        projects = self.extract_projects()
        experience = self.extract_experience()
        
        # Save to JSON files
        data = {
            "author": author_info,
            "publications": publications,
            "projects": projects,
            "experience": experience
        }
        
        output_file = self.output_path / "extracted_content.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"Content extracted to: {output_file}")
        return data

if __name__ == "__main__":
    # Paths
    hugo_path = "../"  # Path to current Hugo site
    output_path = "./data"
    
    extractor = ContentExtractor(hugo_path, output_path)
    content = extractor.extract_all_content()
    
    print(f"Extracted:")
    print(f"- Author info: {bool(content['author'])}")
    print(f"- Publications: {len(content['publications'])}")
    print(f"- Projects: {len(content['projects'])}")
    print(f"- Experience: {bool(content['experience'])}")
