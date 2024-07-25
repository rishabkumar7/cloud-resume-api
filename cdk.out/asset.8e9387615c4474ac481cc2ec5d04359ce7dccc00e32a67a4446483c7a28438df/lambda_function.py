import json

def lambda_handler(event, context):
    resume = {
        "basics": {
            "name": "Anandha Krishnan Senthooraan",
            "label": "Software Developer",
            "email": "asenthoo@asu.edu",
            "phone": "(602) 662-9964",
            "url": "https://www.linkedin.com/in/anandhakrishnan27/",
            "summary": "A skilled software developer with experience in full-stack web development and a strong background in React, Node.js, and ASP.NET.",
            "location": {
                "city": "Tempe",
                "region": "AZ"
            },
        },
        "education": [
            {
                "institution": "Arizona State University",
                "area": "Information Technology",
                "studyType": "MS",
                "endDate": "2025-05-31"
            },
            {
                "institution": "Anna University",
                "area": "Information Technology",
                "studyType": "B Tech",
                "endDate": "2022-06-30"
            }
        ],
        "skills": [
            {
                "name": "Programming Languages",
                "keywords": ["Python", "TypeScript", "JavaScript"]
            },
            {
                "name": "Frameworks",
                "keywords": ["Node.js", "React", "Angular", "ASP.NET"]
            },
            {
                "name": "CSS Frameworks",
                "keywords": ["Bootstrap", "Material UI", "Tailwind"]
            },
            {
                "name": "Databases",
                "keywords": ["MongoDB"]
            },
            {
                "name": "Software Tools",
                "keywords": ["VS Code", "Git"]
            }
        ],
        # Add other sections of your resume here
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(resume)
    }