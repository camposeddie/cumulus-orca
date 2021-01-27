module.exports = {
  about_orca: {
    "Introduction": ['about/introduction/orca-intro',
                     'about/introduction/intro-navigating',
                     'about/introduction/intro-contributing',
                     'about/introduction/intro-glossary'
                    ],
    "Architecture": ['about/architecture/architecture-intro',
                     'about/architecture/architecture-software-system',
                     'about/architecture/architecture-archive-container',
                     'about/architecture/architecture-recover-container',
                     'about/architecture/architecture-database-container',
                    ],
    "Helpful Tips": ['about/tips',
                    ],
    "ORCA Team": ['about/team',
                 ],
  },
  dev_guide: {
    "Getting Started": [
        'developer/quickstart/developer-intro',
    ],

    "Development Guide": [
        {
            "Developing Code": [
                'developer/development-guide/code/contrib-code-intro',
                'developer/development-guide/code/setup-dev-env',
                'developer/development-guide/code/linting',
                'developer/development-guide/code/unit-tests',
                'developer/development-guide/code/postgres-tests',
            ],
            "Developing Documentation": [
                'developer/development-guide/documentation/contrib-documentation-intro',
                'developer/development-guide/documentation/contrib-documentation-env',
                'developer/development-guide/documentation/contrib-documentation-add',
                'developer/development-guide/documentation/contrib-documentation-templates',
                'developer/development-guide/documentation/contrib-documentation-tasks',
                'developer/development-guide/documentation/documentation-style-guide',
                'developer/development-guide/documentation/contrib-documentation-deploy',
            ],
        },
    ],
    "Deployment Guide": [
        'developer/deployment-guide/deployment',
        'developer/deployment-guide/deployment-environment',
        'developer/deployment-guide/deployment-s3-bucket',
        'developer/deployment-guide/testing_deployment'
    ],
  },
  cookbook: {
    "Getting Started": ['cookbook/cookbook-intro',
                       ],
  },
  ops_guide: {
    "Getting Started": ['operator/operator-intro',
                       ],
  },
};
