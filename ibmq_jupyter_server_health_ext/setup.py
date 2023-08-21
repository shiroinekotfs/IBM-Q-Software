from setuptools import setup, find_packages
import ibmq_jupyter_server_health_ext

setup(
      name='ibmq-jupyter-server-health-ext',
      version='0.0.1',
      description='IBM Quantum Jupyter Server Health Extension',
      author='IBM Quantum Team',
      author_email='',
      license='Apache-2.0',
      classifiers=[
        'License :: OSI Approved :: Apache Software License',
        'Classifier: Programming Language :: Python',
        'Classifier: Programming Language :: Python :: 3',
        'Classifier: Framework :: Jupyter',
        'Operating System :: POSIX :: Linux',
      ],
      url='https://github.ibm.com/IBM-Q-Software/ibmq-jupyter-server-health-ext',
      packages=['ibmq_jupyter_server_health_ext'],
      include_package_data=True,
      install_requires=['jupyter-server'],
      data_files=[
          ("etc",
           [
            'etc/jupyter_server_health.json'
           ]
          ),
          ("bin",
           [
            'bin/ibmq-jupyter-server-health-ext'
           ]
          )
      ]
)
